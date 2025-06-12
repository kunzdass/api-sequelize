create table tasks (
	id serial primary key,
	description text not null,
	done boolean not null default false
);

create table department (
	id serial primary key,
	name text not null
);

alter table tasks add column id_department integer;
alter table tasks add foreign key (id_department) references department (id);

create table files (
	id serial primary key,
	filepath text not null
);