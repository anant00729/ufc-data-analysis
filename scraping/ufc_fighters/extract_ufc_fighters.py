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

        if _in == 10:
          ad = td_ele.find('img')
          if ad is not None:
            _d['belt'] = True
          else:
            _d['belt'] = False

        if _in == 9:
          if td_ele.text.rstrip("\n").strip() != '':
            _d['draw'] = int(td_ele.text.rstrip("\n").strip())
          else:
            _d['draw'] = 0

        if _in == 8:
          if td_ele.text.rstrip("\n").strip() != '':
            _d['loose'] = int(td_ele.text.rstrip("\n").strip())
          else:
            _d['loose'] = 0

        if _in == 7:
          if td_ele.text.rstrip("\n").strip() != '':
            _d['win'] = int(td_ele.text.rstrip("\n").strip())
          else:
            _d['win'] = 0

        if _in == 6:
          if td_ele.text.rstrip("\n").strip() != '':
            _d['stance'] = td_ele.text.rstrip("\n").strip()
          else:
            _d['stance'] = 'Not Known'
        if _in == 5:
          if td_ele.text.rstrip("\n").strip() != '--':
            reach = td_ele.text.rstrip("\n").strip()
            reach = float(reach.split('"')[0])
            _d['reach'] = reach
          else:
            _d['reach'] = 0
        if _in == 4:
          if td_ele.text.rstrip("\n").strip() != '--':
            weight = td_ele.text.rstrip("\n").strip()
            weight = weight.split('lbs.')
            _d['weight'] = weight[0]
            td_ele.text.rstrip("\n").strip()
          else:
            _d['weight'] = 0
        if _in == 3:
          if td_ele.text.rstrip("\n").strip() != '--':
            _d['height'] = td_ele.text.rstrip("\n").strip()
          else:
            _d['height'] = 'Not Known'
        if _in == 2:
          ad = td_ele.find('a')
          if ad.text != '':
            _d['nickname'] = ad.text.rstrip("\n").strip()
          else:
            _d['nickname'] = 'Not Known'
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