create database NodeTestes
go

use NodeTestes

CREATE TABLE Persons (
    Personid int IDENTITY(1,1) PRIMARY KEY,
    LastName varchar(255) NOT NULL,
    FirstName varchar(255),
    Age int
);

insert into Persons (LastName, FirstName, Age) values 
('Mercury', 'Fred', 35),
('Jackson', 'Michael', 36),
('Shinoda', 'Mike', 30),
('Presley', 'Elvis', 53),
('Tyson', 'Mike', 60)