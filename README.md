## Diagrama:

### Objetivos
 - Pipeline CI/CD cloudBuild + GKE
 - Usar como Helm Charts 
 - Aplicar Certificados SSL/TLS (Let's Ebcrypt)
 - Aplicar Prometheus e Grafana
 - Infra com Terraform usando modulos



![Diagrama](./docs-assets/diagrama.drawio.png)

```SQL
INSERT INTO Products (name, price, created_at, updated_at)
VALUES 
  ('Notebook Dell Inspiron', 3999.99, NOW(), NOW()),
  ('Smartphone Samsung Galaxy S21', 2999.90, NOW(), NOW()),
  ('Fone de Ouvido Bluetooth JBL', 199.99, NOW(), NOW()),
  ('Monitor LG UltraWide', 1299.99, NOW(), NOW()),
  ('Teclado Mecânico Razer BlackWidow', 499.90, NOW(), NOW()),
  ('Mouse Logitech MX Master 3', 399.90, NOW(), NOW()),
  ('Câmera Canon EOS Rebel', 3599.99, NOW(), NOW()),
  ('Smartwatch Apple Watch Series 7', 4299.99, NOW(), NOW()),
  ('Tablet iPad Air 2022', 5299.00, NOW(), NOW()),
  ('Impressora HP LaserJet Pro', 849.90, NOW(), NOW()),
  ('TV Smart LG OLED 55"', 7999.99, NOW(), NOW()),
  ('Console Sony PlayStation 5', 4999.99, NOW(), NOW()),
  ('Caixa de Som Alexa Echo Dot', 349.99, NOW(), NOW()),
  ('Kindle Paperwhite 8GB', 699.90, NOW(), NOW()),
  ('Ar-Condicionado Split LG Dual Inverter', 2699.90, NOW(), NOW()),
  ('Geladeira Brastemp Frost Free', 5299.00, NOW(), NOW()),
  ('Máquina de Lavar Samsung EcoBubble', 2899.99, NOW(), NOW()),
  ('Micro-ondas Electrolux 20L', 599.99, NOW(), NOW()),
  ('Fogão 5 Bocas Brastemp', 1799.90, NOW(), NOW()),
  ('Ventilador Arno Turbo Silencio', 219.90, NOW(), NOW()),
  ('Drone DJI Mavic Mini 2', 3499.99, NOW(), NOW()),
  ('Caixa Térmica Coleman 48QT', 299.90, NOW(), NOW()),
  ('Bicicleta Caloi Elite Carbon', 9999.99, NOW(), NOW()),
  ('Mochila para Notebook Samsonite', 299.99, NOW(), NOW()),
  ('Relógio Garmin Forerunner 245', 1499.99, NOW(), NOW());

```
```SQL
CREATE TABLE Products (
    id SERIAL PRIMARY KEY, 
    name VARCHAR(255) NOT NULL,
    price FLOAT NOT NULL, 
    created_at TIMESTAMP NOT NULL DEFAULT NOW(), 
    updated_at TIMESTAMP NOT NULL DEFAULT NOW() 
);

```