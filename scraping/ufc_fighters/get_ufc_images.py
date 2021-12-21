import os
import pandas as pd
from string import ascii_lowercase
from bs4 import BeautifulSoup
import re
import requests
import numpy as np

base_path = os.path.dirname(os.path.realpath(__file__))
# + "/output-players/"
o_df = pd.read_csv(base_path + "/all_fighters_det.csv")
# o_df = pd.DataFrame(base_path + "/all_fighters_det.csv")

img_urls = []

o_df['image_url'] = o_df['first_name']

# i = 0

df = pd.DataFrame()

for name in o_df['name'].values:
  _o = {
    'image_url': 'Image Not Found'
  }
  name = name.replace(" ", "+").lower()
  file_path = base_path + "/output-players/" + name + ".txt"
  _f = open(file_path, "r").read()
  html_soup = BeautifulSoup(_f, 'html.parser')

  base_url = "https://www.sherdog.com/"
  t_head = html_soup.find('tr', class_="class='odd'")

  img_url = ''
  if t_head is not None and t_head.find('td') is not None:
    img_url = t_head.find('td')
    if img_url is not None:
      img_url = img_url.find('img')
      if img_url is not None:
        img_url = img_url['data-original']
        img_url = 'https://www.sherdog.com' + img_url
        _o['image_url'] = img_url

  df = df.append(_o, ignore_index=True)
  o_df.update(df)

  # if i == 3:
  #   break
  # i += 1
o_df.to_csv('all_fighters_det.csv', index=False)


# for data in o_df:
#
# +  + ".txt"
#
# o_df['']
#
# print(o_df)


# o_df.to_csv('all_fighters_det.csv', index=False)