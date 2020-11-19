CREATE DATABASE banco_de_dados;

USE banco_de_dados;

CREATE TABLE projetos
(
	id int unsigned not null auto_increment,
	nome varchar(100) not null,
	descricao varchar(250) not null,
	datainicio date not null,
	dataprevfim date,
	datafim date,
	PRIMARY KEY(id)
);

CREATE TABLE blocos
(
	id int unsigned not null auto_increment,
	id_projeto int unsigned not null,
	nome varchar(100) not null,
	historia varchar(250) not null,
	dataprevfim date not null,
	PRIMARY KEY (id),
	CONSTRAINT bloco_projeto_fk FOREIGN KEY (id_projeto) REFERENCES projetos (id)
);

CREATE TABLE tarefas
(
	id_projeto int unsigned not null,
	id_bloco int unsigned not null,
	sequencia smallint unsigned not null auto_increment,
	nome varchar(100) not null,
	descricao varchar(250) not null,
	PRIMARY KEY (sequencia),
	FOREIGN KEY (id_bloco) REFERENCES blocos (id),
	CONSTRAINT tarefa_fk FOREIGN KEY (id_projeto) REFERENCES projetos (id)
);