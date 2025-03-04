
class Guerreiro extends Personagem {
    constructor(nome, vida, resistencia, velocidade, dano_critico, mana, tenacidade, lore, img, dados) {
        super(nome, vida, resistencia, velocidade, dano_critico, mana, lore, img);
        this.tenacidade = tenacidade;
        this.dados = dados;
    }
}

let dadosGuerreiro = [
    { atributo: 'Vida', valor: 78 },
    { atributo: 'Resistência', valor: 57 },
    { atributo: 'Velocidade', valor: 28 },
    { atributo: 'Dano Crítico', valor: 36 },
    { atributo: 'Mana', valor: 43 }
];

let guerreiro = new Guerreiro(
    'Titã - Os Guerreiros da Muralha', 
    78, 57, 28, 36, 43, 
    'guerreiro_runa.png', 
    `Os Titãs são os protetores da humanidade, guerreiros disciplinados...`, 
    'Destiny-2-Class.png',
    dadosGuerreiro
);

export default guerreiro
