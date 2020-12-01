create database management;

create table employee(
    employee_id serial primary key,
    name varchar(255),
    age int,
    birth date
);

create table salary(
    employee_id int references employee(employee_id),
    salary int,
    registration_date date
);

create table attendance(
    employee_id int references employee(employee_id),
    work_day date,
    work_start time,
    work_end time
);

create table schedule(
    employee_id int references employee(employee_id),
    work_day date,
    work_start time,
    work_end time
);

insert into employee (name, age, birth) values ('三郎', 30, '1995-09-12');

insert into salary (employee_id, salary, registration_date ) values (3, 400000, '2019-01-01');

insert into attendance(work_day, work_start, work_end) values('2020-11-23', )

insert into schedule(employee_id, work_day, work_start, work_end) values(1, '2020-11-24', '09:00', '18:00')

select work_start, work_end from schedule where work_day = '2020-11-23';