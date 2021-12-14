import os
import pandas as pd
from bs4 import BeautifulSoup
import re
import requests

base_path = os.path.dirname(os.path.realpath(__file__))
base_sp = base_path.split('/')
file_path = '/'.join(base_sp[:len(base_sp)-1]) + "/ufc_events/ufc_event_raw_dataset.csv"

df = pd.read_csv(file_path)
o_df = pd.DataFrame()

_i = 0
for link in df['event_link'].values:
  e_name = df['event_name'].values[_i]
  _d = {
    'event_name': e_name
  }
  file_path = base_path + "/output-data/" + e_name.lower().replace(" ", "-") + ".txt"
  _f = open(file_path, "r").read()
  html_soup = BeautifulSoup(_f, 'html.parser')
  tbody = html_soup.find_all('tbody', class_='b-fight-details__table-body')
  t_rs = tbody[0].find_all('tr')

  for c_tr in t_rs:
    a_td = c_tr.find_all('td')
    _in = 0
    for s_td in a_td:
      if _in == 1:
        ad = s_td.find_all('a')
        _d['fighter_w'] = ad[0].text.rstrip("\n").strip()
        _d['fighter_l'] = ad[1].text.rstrip("\n").strip()
      elif _in == 2:
        ad = s_td.find_all('p')
        _d['kd_w'] = ad[0].text.rstrip("\n").strip()
        _d['kd_l'] = ad[1].text.rstrip("\n").strip()
      elif _in == 3:
        ad = s_td.find_all('p')
        _d['str_w'] = ad[0].text.rstrip("\n").strip()
        _d['str_l'] = ad[1].text.rstrip("\n").strip()
      elif _in == 4:
        ad = s_td.find_all('p')
        _d['td_w'] = ad[0].text.rstrip("\n").strip()
        _d['td_l'] = ad[1].text.rstrip("\n").strip()
      elif _in == 5:
        ad = s_td.find_all('p')
        _d['sub_w'] = ad[0].text.rstrip("\n").strip()
        _d['sub_l'] = ad[1].text.rstrip("\n").strip()
      elif _in == 6:
        ad = s_td.find('p')
        _d['weight_class'] = ad.text.rstrip("\n").strip()
      elif _in == 7:
        ad = s_td.find_all('p')
        _d['method_w'] = ad[0].text.rstrip("\n").strip()
        _d['method_det'] = ad[1].text.rstrip("\n").strip()
      elif _in == 8:
        ad = s_td.find('p')
        _d['fight_rounds'] = ad.text.rstrip("\n").strip()
      elif _in == 9:
        ad = s_td.find('p')
        _d['fight_duration'] = ad.text.rstrip("\n").strip()
      _in += 1
    o_df = o_df.append(_d, ignore_index=True)
  _i += 1

o_df.to_csv('all_event_det.csv', index=False)