CREATE DATABASE proyectofinal;

CREATE TABLE clientes(
    id_cliente int NOT NULL AUTO_INCREMENT, 
    PRIMARY KEY(id_cliente),
    nombre VARCHAR(150),
    apellido VARCHAR (150),
     VARCHAR(150) NOT NULL    
);

CREATE TABLE productos(
    id_producto int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id_producto),
    nombre VARCHAR(150),
    precio int
);

CREATE TABLE vendedores(
    id_vendedor int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id_vendedor),
    nombre VARCHAR(150),
);

CREATE TABLE facturas(
    folio int NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (folio);
    fecha int,
    cantidad int,
    id_cliente int,
    id_producto int,
    id_vendedor int,
    FOREIGN KEY (id_cliente) REFERENCES clientes(id_cliente),
    FOREIGN KEY  (id_producto) REFERENCES producto(id_producto),
    FOREIGN KEY (id_vendedor) REFERENCES vendedor(id_vendedor)
);