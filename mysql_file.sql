CREATE DATABASE IF NOT EXISTS dbms;
USE dbms;

CREATE TABLE signup (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password_hash VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (id)
);
desc signup;
select * from signup;

select * from signup where username='shyam';
CREATE TABLE Train (
  Train_No INT PRIMARY KEY,
  Train_Name VARCHAR(50) NOT NULL,
  Source_Station VARCHAR(50) NOT NULL,
  Destination_Station VARCHAR(50) NOT NULL,
  Departure_Time TIME NOT NULL,
  Arrival_Time TIME NOT NULL,
  Journey_Duration VARCHAR(20) NOT NULL,
  Frequency VARCHAR(20) NOT NULL,
  Class_Type VARCHAR(20) NOT NULL,
  Total_Seats INT NOT NULL,
  Route VARCHAR(100) NOT NULL
);
desc train;
INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  1234,
  'Rajdhani Express',
  'New Delhi',
  'Mumbai',
  '06:00:00',
  '12:00:00',
  '6 hours',
  'Daily',
  'AC',
  1000,
  'New Delhi -> Agra -> Bhopal -> Mumbai'
);
select  * from train;
delete from signup where id=10;
select * from signup;
INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  1111,
  'Morning Express',
  'New Delhi',
  'Mumbai',
  '06:00:00',
  '12:00:00',
  '6 hours',
  'Daily',
  'AC',
  800,
  'New Delhi -> Agra -> Bhopal -> Mumbai'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  2222,
  'Afternoon Delight',
  'New Delhi',
  'Mumbai',
  '12:00:00',
  '18:00:00',
  '6 hours',
  'Daily',
  'Sleeper',
  1000,
  'New Delhi -> Agra -> Bhopal -> Mumbai'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  3333,
  'Evening Express',
  'New Delhi',
  'Mumbai',
  '18:00:00',
  '00:00:00',
  '6 hours',
  'Daily',
  'AC',
  1200,
  'New Delhi -> Agra -> Bhopal -> Mumbai'
);
INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  5678,
  'Shatabdi Express',
  'Kolkata',
  'Delhi',
  '08:00:00',
  '14:00:00',
  '6 hours',
  'Daily',
  'AC',
  800,
  'Kolkata -> Asansol -> Patna -> Delhi'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  91011,
  'Duronto Express',
  'Chennai',
  'Bangalore',
  '10:00:00',
  '13:00:00',
  '3 hours',
  'Weekly',
  'Sleeper',
  600,
  'Chennai -> Vellore -> Bangalore'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  121314,
  'Gatimaan Express',
  'Delhi',
  'Agra',
  '09:00:00',
  '10:30:00',
  '1.5 hours',
  'Daily',
  'AC',
  500,
  'Delhi -> Agra'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  151617,
  'Mysore Express',
  'Bangalore',
  'Mysore',
  '07:30:00',
  '11:00:00',
  '3.5 hours',
  'Daily',
  'Sleeper',
  400,
  'Bangalore -> Mandya -> Mysore'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  181920,
  'Goa Express',
  'Mumbai',
  'Goa',
  '11:00:00',
  '17:00:00',
  '6 hours',
  'Weekly',
  'AC',
  700,
  'Mumbai -> Pune -> Goa'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  212223,
  'Puri Express',
  'Kolkata',
  'Puri',
  '07:00:00',
  '15:00:00',
  '8 hours',
  'Daily',
  'Sleeper',
  900,
  'Kolkata -> Bhubaneswar -> Puri'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  242526,
  'Rajasthan Sampark Kranti Express',
  'Delhi',
  'Jaipur',
  '05:30:00',
  '10:30:00',
  '5 hours',
  'Daily',
  'AC',
  1200,
  'Delhi -> Gurgaon -> Jaipur'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  272829,
  'Chennai Express',
  'Mumbai',
  'Chennai',
  '08:30:00',
  '18:30:00',
  '10 hours',
  'Weekly',
  'AC',
  1000,
  'Mumbai -> Pune -> Bangalore -> Chennai'
);

INSERT INTO Train (
  Train_No,
  Train_Name,
  Source_Station,
  Destination_Station,
  Departure_Time,
  Arrival_Time,
  Journey_Duration,
  Frequency,
  Class_Type,
  Total_Seats,
  Route
) VALUES (
  303132,
  'Ganga Sagar Express',
  'Howrah',
  'Ganga Sagar',
  '06:00:00',
  '13:00:00',
  '7 hours',
  'Daily',
  'Sleeper',
  600,
  'Howrah -> Sealdah -> Ganga Sagar'
);
select * from train;
-- CREATE TABLE Booking (
--   booking_id INT AUTO_INCREMENT PRIMARY KEY,
--   user_id INT NOT NULL,
--   train_no INT NOT NULL,
--   booking_date DATE NOT NULL,
--   journey_date DATE NOT NULL,
--   status VARCHAR(20) NOT NULL,
--   FOREIGN KEY (user_id) REFERENCES signup(id),
--   FOREIGN KEY (train_no) REFERENCES Train(Train_No)
-- );
-- desc booking;

-- CREATE TABLE Payment (
--   payment_id INT AUTO_INCREMENT PRIMARY KEY,
--   booking_id INT NOT NULL,
--   amount DECIMAL(10, 2) NOT NULL,
--   payment_date DATE NOT NULL,
--   payment_status VARCHAR(20) NOT NULL,
--   FOREIGN KEY (booking_id) REFERENCES Booking(booking_id)
-- );
-- desc payment;
-- drop table booking;
-- drop table payment;

CREATE TABLE Booking (
  booking_id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT NOT NULL,
  train_no INT NOT NULL,
  booking_date DATE NOT NULL,
  journey_date DATE NOT NULL,
  passenger_name VARCHAR(100) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  status VARCHAR(20) NOT NULL,
  FOREIGN KEY (user_id) REFERENCES signup(id),
  FOREIGN KEY (train_no) REFERENCES Train(Train_No)
);
desc booking;
CREATE TABLE Payment (
  payment_id INT AUTO_INCREMENT PRIMARY KEY,
  booking_id INT NOT NULL,
  amount DECIMAL(10, 2) NOT NULL,
  payment_date DATE NOT NULL,
  payment_status VARCHAR(20) NOT NULL,
  FOREIGN KEY (booking_id) REFERENCES Booking(booking_id)
);
desc payment;

alter table booking add age int not null;
alter table booking modify booking_date TIMESTAMP not NULL DEFAULT CURRENT_TIMESTAMP;
desc booking;
select * from booking;
desc train;
alter table train add  Amount int not null;
select * from train;
update  train set amount='1000' where train_no='1111';
update  train set amount='1000' where train_no='1111';
