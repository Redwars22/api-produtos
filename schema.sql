CREATE TABLE products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    quantidade INT NOT NULL,
    valor_unitario DECIMAL(10, 2) NOT NULL,
    foto VARCHAR(255),
    fornecedor VARCHAR(255)
);

INSERT INTO products (nome, descricao, quantidade, valor_unitario, foto, fornecedor) VALUES
('Camiseta Estampada', 'Camiseta 100% algodão com estampa divertida.', 50, 39.90, 'imagens/camiseta.jpg', 'Moda & Estilo'),
('Tênis Esportivo', 'Tênis confortável para atividades físicas.', 30, 199.90, 'imagens/tenis.jpg', 'Esportes & Cia'),
('Relógio Digital', 'Relógio digital à prova d\'água com cronômetro.', 20, 89.90, 'imagens/relogio.jpg', 'Acessórios Modernos'),
('Mochila Escolar', 'Mochila espaçosa com vários compartimentos.', 25, 79.90, 'imagens/mochila.jpg', 'Estudos & Aventura'),
('Fone de Ouvido Bluetooth', 'Fone de ouvido sem fio com cancelamento de ruído.', 40, 149.90, 'imagens/fone.jpg', 'Tecnologia & Som');
