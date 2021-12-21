# https://www.sherdog.com/stats/fightfinder?SearchTxt=Juan+Adams

import requests
from string import ascii_lowercase
import os
import pandas as pd

base_path = os.path.dirname(os.path.realpath(__file__))
file_path = base_path + '/all_fighters_det.csv'

df = pd.read_csv(file_path)

def download_url(url, name):
  print("downloading: ", url + " name: " + name)
  r = requests.get(url, stream=True)
  if r.status_code == requests.codes.ok:
    with open(base_path + "/output-players/" + name.lower().replace(" " , "-") + ".txt", 'wb') as f:
      for data in r:
        f.write(data)

for name in df['name'].values:
  name = name.replace(" ", "+").lower()
  url = f"https://www.sherdog.com/stats/fightfinder?SearchTxt={name}"
  download_url(url, name)