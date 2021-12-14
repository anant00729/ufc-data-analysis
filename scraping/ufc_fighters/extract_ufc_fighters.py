import os
import pandas as pd
from string import ascii_lowercase
from bs4 import BeautifulSoup
import re
import requests

base_path = os.path.dirname(os.path.realpath(__file__))
o_df = pd.DataFrame()

for alpha in ascii_lowercase:
  _d = {
    'alpha': alpha
  }
  file_path = base_path + "/output-data/" + alpha + ".txt"
  _f = open(file_path, "r").read()
  html_soup = BeautifulSoup(_f, 'html.parser')
  tbody_ele = html_soup.find('tbody')
  trs_ele = tbody_ele.find_all('tr')

  for tr_ele in trs_ele:
    tds_ele = tr_ele.find_all('td')
    if len(tds_ele) > 1:
      _in = 0
      for td_ele in tds_ele:
        if _in == 0 or _in == 1:
          ad = td_ele.find('a')
          if ad is not None:
            if _in == 0:
              _d['name'] = ad.text.rstrip("\n").strip()
              _d['first_name'] = ad.text.rstrip("\n").strip()
            else:
              if _d['name'] != '':
                _d['name'] = _d['name'] + " " + ad.text.rstrip("\n").strip()
              else:
                _d['name'] = ad.text.rstrip("\n").strip()
              _d['last_name'] = ad.text.rstrip("\n").strip()
        _in += 1
      o_df = o_df.append(_d, ignore_index=True)

o_df.to_csv('all_fighters_det.csv', index=False)