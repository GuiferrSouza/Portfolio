# Sincronizador de Bancos de Dados EPLAN x ERP

O **Sincronizador de Bancos de Dados EPLAN x ERP** é uma solução desenvolvida para integrar e manter a consistência de informações entre o banco de dados de peças do **[EPLAN Electric P8](https://www.eplan.software/pt/solucoes/eplan-electric-p8/)** e o **ERP corporativo**. O sistema utiliza a **API oficial do EPLAN** para realizar a **sincronização bidirecional de dados**, garantindo que qualquer alteração efetuada em um dos sistemas seja automaticamente refletida no outro, de forma segura, auditável e totalmente configurável.

O principal objetivo da ferramenta é **eliminar redundâncias**, **assegurar a integridade das informações** e **reduzir o esforço manual** na atualização de dados técnicos e comerciais de componentes industriais.

O **EPLAN Electric P8** é uma plataforma amplamente utilizada na **engenharia elétrica e de automação**, permitindo o desenvolvimento de diagramas esquemáticos, gerenciamento de componentes e geração automática de documentação técnica. Já o **ERP (Enterprise Resource Planning)** é o sistema responsável pela **gestão administrativa, financeira e de estoque** de uma organização.  

A integração entre o EPLAN e o ERP é fundamental para alinhar as informações de engenharia e gestão empresarial, garantindo que os dados técnicos dos projetos estejam sincronizados com os registros comerciais e operacionais da empresa. Dessa forma, evita-se a ocorrência de divergências entre o que é projetado, adquirido e produzido, promovendo maior eficiência e confiabilidade nos processos internos.

## Arquitetura e Integração

A aplicação atua como um **módulo complementar do EPLAN Electric P8**, adicionando uma interface visual dentro do próprio ambiente do software. Por meio dessa interface, é possível configurar conexões, mapear propriedades e executar sincronizações de dados entre o EPLAN e o ERP.

A comunicação com o ERP pode ocorrer de duas formas:  
- **Conexão direta ao banco de dados SQL**, mediante credenciais e permissões adequadas;  
- **Integração via API**, utilizando endpoints disponibilizados pelo ERP, quando essa funcionalidade estiver disponível.

A arquitetura foi projetada com foco em **extensibilidade**, permitindo a adaptação a diferentes sistemas ERP sem alterações significativas no núcleo da aplicação.

## Funcionalidades

### Configuração de Conexão
Permite configurar os parâmetros de acesso ao ERP, seja via conexão direta com o banco de dados SQL, seja por meio de uma API.  
Essas credenciais podem ser salvas localmente para reutilização futura, facilitando o processo de configuração em ambientes corporativos.

### Mapeamento de Dados
O sistema oferece um mecanismo avançado de **mapeamento de propriedades**, que define quais campos do EPLAN correspondem aos campos equivalentes do ERP.  
São disponibilizadas mais de **7.000 propriedades** do EPLAN, que podem ser selecionadas em um **ComboBox** de forma prática e intuitiva.

Após selecionar uma propriedade do EPLAN, o usuário indica o **nome equivalente no ERP**, criando assim uma relação direta entre os dois sistemas.

As propriedades suportam múltiplos tipos de dados:
- Booleanos  
- Inteiros  
- Números decimais  
- Textos  
- Datas  
- Textos multilíngues  

Para os campos multilíngues, o usuário pode especificar o idioma a ser utilizado ou optar pelo modo padrão, no qual o valor é retornado sem idioma definido.

### Sincronização de Dados
A sincronização é realizada de forma **bidirecional**, permitindo que os dados sejam atualizados tanto do EPLAN para o ERP quanto do ERP para o EPLAN.  
Antes da execução, o sistema apresenta uma **pré-visualização detalhada** das diferenças encontradas entre os bancos, classificando os registros de acordo com seu estado:

- **Peças exclusivas:** registradas apenas em um dos sistemas; ao sincronizar, são automaticamente inseridas no outro.  
- **Peças conflitantes:** compartilham o mesmo número ERP, mas possuem divergências em propriedades mapeadas. O sistema atualiza o destino conforme as regras configuradas.  
- **Peças sincronizadas:** apresentam valores idênticos em ambos os sistemas e não requerem ação adicional.

O processo de sincronização foi desenvolvido com foco em **segurança e rastreabilidade**, mantendo registros completos das operações executadas.

## Requisitos Técnicos

### Licenciamento
- O EPLAN deve possuir o **módulo Runtime** habilitado, necessário para utilização da API.  
- A licença deve incluir o número **EADN 0358**, garantindo que a aplicação seja reconhecida e autorizada pelo sistema EPLAN.

### Versão do EPLAN
Compatível com **EPLAN Electric P8 versão 2022 ou superior**.

### Permissões
O usuário deve possuir privilégios de leitura e escrita no ERP.  
Na ausência de uma API, será necessário acesso direto ao **banco de dados SQL**.

## Segurança e Auditoria

Todas as operações realizadas são registradas em **logs locais**, que contêm:  
- Data e hora da execução  
- Usuário responsável  
- Tipo de operação (inserção, atualização, resolução de conflito etc.)  
- Quantidade de registros processados  

Esses registros garantem **rastreabilidade total** e podem ser exportados para auditoria ou análise de integração.

## Benefícios

- Sincronização automatizada entre o ambiente de engenharia e o sistema de gestão  
- Eliminação de inconsistências e redundâncias de dados  
- Redução de retrabalho e esforço manual  
- Integração flexível, segura e escalável  
- Interface intuitiva integrada ao EPLAN Electric P8  
- Aumento da confiabilidade na gestão de componentes e dados de projeto  

## Confidencialidade

Este projeto é **privado** e o código-fonte é **protegido por questões de confidencialidade e propriedade intelectual**.  
A reprodução, distribuição, engenharia reversa ou modificação não autorizada de qualquer parte do sistema é estritamente proibida.  
O conteúdo aqui apresentado destina-se exclusivamente à **demonstração técnica e descritiva**, sem exposição do código ou de sua implementação interna.
