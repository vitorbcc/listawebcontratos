export interface Model {
    _declaration:     Declaration;
    listaWebContrato: ListaWebContrato;
}

export interface Declaration {
    _attributes: DeclarationAttributes;
}

export interface DeclarationAttributes {
    version:  string;
    encoding: string;
}

export interface ListaWebContrato {
    _attributes: ListaWebContratoAttributes;
    contrato:    Contrato[];
}

export interface ListaWebContratoAttributes {
    "xmlns:xsi": string;
}

export interface Contrato {
    seqDocumentoContrato:         string;
    codTipoObjetoContrato:        string;
    nomeFornecedor:               string;
    codigoFornecedor:             string;
    codDotacaoOrcamentaria:       string;
    dataProxApostila:             string;
    tipoDocumentoContrato:        string;
    codDocumentoContrato:         string;
    anoDocumentoContrato:         string;
    descObjetoDocumento:          string;
    dataTerminoVigencia:          Date;
    dataInicioVigencia:           Date;
    dataTermVigenciaContratoOrig: Date;
    numProcessoLicitatorio:       string;
    anoProcessoLicitatorio:       string;
    valorInicialContrato?:        string;
    descModalidadePedido:         string;
    dataAssinaturaContrato:       Date;
    numCNPJ?:                     string;
    tipoValor:                    string;
    simboloMoeda:                 string;
    dataPublicacaoContrato:       Date;
    listaAditamento:              Aditamento[];
    listaMaoDeObra:               ListaMaoDeObra;
    numModalidadeContrato?:       string;
    anoModalidadeContrato?:       string;
}
export enum Class {
 SQLTimestamp = "sql-timestamp",
}

export interface Aditamento {
    seqDocumentoContrato:    string;
    id:                      string;
    descObjetoAditamento?:   string;
    valorAditamentoContrato: string;
    dataAditamentoContrato:  Date;
    dataTerminoVigencia:     Date;
    codTipoAditamento:       string;
}

export interface ListaMaoDeObra {
}

