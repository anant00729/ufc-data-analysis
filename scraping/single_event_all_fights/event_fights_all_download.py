import os
import pandas as pd
from bs4 import BeautifulSoup
import re
import requests

base_path = os.path.dirname(os.path.realpath(__file__))
base_sp = base_path.split('/')
file_path = '/'.join(base_sp[:len(base_sp)-1]) + "/ufc_events/ufc_event_raw_dataset.csv"

df = pd.read_csv(file_path)

df_year_and_name = pd.DataFrame()


def download_url(url, name):
  print("downloading: ", url + " name: " + name)
  r = requests.get(url, stream=True)
  if r.status_code == requests.codes.ok:
    with open(base_path + "/output-data/" + name.lower().replace(" " , "-") + ".txt", 'wb') as f:
      for data in r:
        f.write(data)


_i = 0
for link in df['event_link'].values:
  e_name = df['event_name'].values[_i]
  download_url(link, e_name)
  _i += 1
