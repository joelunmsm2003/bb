# import requests
# import json

# header = {"Content-Type": "application/json; charset=utf-8",
#           "Authorization": "Basic NzlmMTc0ZWYtNzYyZC00MTFhLTg3MTUtOTdkOTQwODdhN2Uy"}

# payload = {"app_id": "e83d3f50-5cb9-4059-9433-6798d4f9e12f",
#            "include_player_ids": ["6392d91a-b206-4b7b-a620-cd68e32c3a76"],
#            "contents": {"en": "English Message"}}
 
# req = requests.post("https://onesignal.com/api/v1/notifications", headers=header, data=json.dumps(payload))
 
# print(req.status_code, req.reason)

import requests
import json

header = {"Content-Type": "application/json; charset=utf-8",
          "Authorization": "Basic NzlmMTc0ZWYtNzYyZC00MTFhLTg3MTUtOTdkOTQwODdhN2Uy"}

payload = {"app_id": "e83d3f50-5cb9-4059-9433-6798d4f9e12f",
           "include_player_ids": ["c685038a-99bd-445d-b68f-50b986e59b8f"],
           "contents": {"en": "English Messag000e"}}
 
req = requests.post("https://onesignal.com/api/v1/notifications", headers=header, data=json.dumps(payload))
 
print(req.status_code, req.reason)