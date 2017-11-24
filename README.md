# node-api

### Endpoints supported

1 - http://localhost:8000/reservations (GET) - To fetch all reservations
2 - http://localhost:8000/reservation (POST) -  {name, hotelName, arrivalDate, departureDate}
3 - http://localhost:8000/reservation/:id(GET) - to fetch specific reservation record

### Bonus point endpoint - filtering

4 - http://localhost:8000/reservations?hotelName=Mariot&arrivalDate=2017-11-12&departureDate=2017-11-21