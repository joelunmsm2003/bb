killall -9 python
cd server
python manage.py runserver 0.0.0.0:8000&
killall -9 ionic
ionic serve&