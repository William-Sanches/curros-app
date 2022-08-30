export interface Pontos {
    nome: string;
    estado: {
        id: number;
        nome: string;
    };
    cidade: {
        id: number,
        nome: string;
    }
    pontoDeVenda: string;
    start: string;
    end: string;
}
