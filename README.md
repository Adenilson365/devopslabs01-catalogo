### Objetivos

- Fornecer um app simples, capaz de consumir banco de dados e consumir e ser consumido por outros apps.
- Essa aplicação é base para ser usada em labooratórios DevOps.
- Tem recursos de:
  - Instrumentada com OTEL para: logs, traces, métricas.
  - Depende de variáveis de ambiente para funcionar.
  - Depende de banco de dados para funcionar.
- Será adicionado:
  - Endpoints de health e ready

### Repositórios de aplicações relacionados

- [Frontend](https://github.com/Adenilson365/devopslabs01-frontend)
- [BackEnd - Api-Images](https://github.com/Adenilson365/devopslabs01-api-images)

### Repositórios de Infra e Deploys.

- [Terraform - Infra](https://github.com/Adenilson365/devopslabs01-iac)
- [Laboratório de ServiceMesh (istio)](https://github.com/Adenilson365/kubernetes-istioServiceMesh)
- [Laboratório GitOps-ArgoCD](https://github.com/Adenilson365/argocd-lab)
- [Laboratório de Observabilidade](https://github.com/Adenilson365/devopslabs02-observabilidade)

### Scripts úteis

- Criar e popular tabela no banco de dados.

```SQL
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10, 2) NOT NULL,
    imagem_id VARCHAR(50),
    category VARCHAR(100) NOT NULL,
    stars INTEGER CHECK (stars BETWEEN 0 AND 5),
    stock INTEGER NOT NULL DEFAULT 0,
    num_reviews INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);


INSERT INTO products (name, price, imagem_id, category, stars, stock, num_reviews) VALUES
    ('Computador Gamer XYZ', 2999.99, '1.png', 'computadores', 5, 10, 50),
    ('Notebook Ultra Fino ABC', 3999.99, 'note.jpg', 'notebooks', 4, 5, 30),
    ('Teclado Mecânico Gamer RGB', 299.99, 'mouse.jpg', 'perifericos', 4, 20, 15),
    ('Mouse Gamer XYZ - 16000 DPI', 159.99, 'mouse.jpg', 'perifericos', 5, 25, 40),
    ('Teclado Mecânico Gamer RGB', 299.99, 'mouse.jpg', 'perifericos', 4, 20, 15),
    ('Mouse Gamer XYZ - 16000 DPI', 159.99, 'mouse.jpg', 'perifericos', 5, 25, 40),
    ('Teclado Mecânico Gamer RGB', 299.99, 'mouse.jpg', 'perifericos', 4, 20, 15),
    ('Mouse Gamer XYZ - 16000 DPI', 159.99, 'mouse.jpg', 'perifericos', 5, 25, 40),
    ('Teclado Mecânico Gamer RGB', 299.99, 'mouse.jpg', 'perifericos', 4, 20, 15),
    ('Mouse Gamer XYZ - 16000 DPI', 159.99, 'mouse.jpg', 'perifericos', 5, 25, 40),
    ('Teclado Mecânico Gamer RGB', 299.99, 'mouse.jpg', 'perifericos', 4, 20, 15),
    ('Mouse Gamer XYZ - 16000 DPI', 159.99, 'mouse.jpg', 'perifericos', 5, 25, 40),
    ('Teclado Mecânico Gamer RGB', 299.99, 'mouse.jpg', 'perifericos', 4, 20, 15),
    ('Mouse Gamer XYZ - 16000 DPI', 159.99, 'mouse.jpg', 'perifericos', 5, 25, 40),
    ('Placa de Vídeo GTX 3060', 1999.99, 'placa-mae.jpeg', 'hardware', 5, 8, 60);


```
