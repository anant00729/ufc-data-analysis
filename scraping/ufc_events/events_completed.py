from urllib import request, error, parse
from bs4 import BeautifulSoup
import pandas as pd


ufc_event_stats_url = "http://www.ufcstats.com/statistics/events/completed?page=all"
_output_file = 'output.txt'
response = request.urlopen(ufc_event_stats_url)
web_content = response.read().decode('UTF-8')

html_soup = BeautifulSoup(web_content, 'html.parser')

row_container = html_soup.find_all('tr', class_='b-statistics__table-row')

df = pd.DataFrame()

_count = 0
_count_new = 0

# # name, rank, area, profile
for _e_row in row_container:
  _d = {}
  fight_location = _e_row.find('td', class_='b-statistics__table-col b-statistics__table-col_style_big-top-padding')
  fight_event_det = _e_row.find('i', class_='b-statistics__table-content')

  if fight_location is not None:
    event_name_det = fight_event_det.find('a', class_='b-link b-link_style_black')
    date_det = fight_event_det.find('span',class_='b-statistics__date')
    if (fight_location is not None) and (fight_location.text is not None):
      _d['event_location'] = fight_location.text.rstrip("\n").strip()
    if (event_name_det is not None) and (event_name_det.text is not None):
      _d['event_name'] = event_name_det.text.rstrip("\n").strip()
      _d['event_link'] = event_name_det['href']
    if (date_det is not None) and (date_det.text is not None):
      _d['event_date'] = date_det.text.rstrip("\n").strip()
    df = df.append(_d, ignore_index=True)

df.to_csv('ufc_event_raw_dataset.csv', index=False)