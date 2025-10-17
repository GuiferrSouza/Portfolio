# Sincronizador de Bancos de Dados EPLAN x ERP

> **Integração inteligente entre engenharia e gestão corporativa.**  
> Sincronização automática, segura e bidirecional entre o **EPLAN Electric P8** e o **ERP corporativo**.

---

O **Sincronizador de Bancos de Dados EPLAN x ERP** é uma solução desenvolvida para integrar e manter a consistência de informações entre o banco de dados de peças do **[EPLAN Electric P8](https://www.eplan.software/pt/solucoes/eplan-electric-p8/)** e o **ERP corporativo**.  

A ferramenta utiliza a **API oficial do EPLAN** para realizar a **sincronização bidirecional de dados**, garantindo que qualquer alteração efetuada em um dos sistemas seja automaticamente refletida no outro — de forma **segura**, **auditável** e **totalmente configurável**.

---

## Objetivos Principais

- 🔄 **Eliminar redundâncias** e divergências entre sistemas  
- 🧩 **Assegurar a integridade das informações**  
- ⚙️ **Reduzir o esforço manual** de atualização de dados técnicos e comerciais  
- 🧠 **Promover alinhamento** entre áreas de engenharia e gestão  

---

## Contexto Tecnológico

O **EPLAN Electric P8** é uma plataforma amplamente utilizada na **engenharia elétrica e de automação**, permitindo o desenvolvimento de diagramas esquemáticos, gerenciamento de componentes e geração automática de documentação técnica.  

O **ERP (Enterprise Resource Planning)**, por sua vez, é o sistema central responsável pela **gestão administrativa, financeira e de estoque** da organização.  

> Integrar esses dois ambientes é essencial para **alinhar o que é projetado, adquirido e produzido**, garantindo consistência entre o **mundo técnico** e o **mundo operacional** da empresa.

---

## Arquitetura e Integração

A aplicação atua como um **módulo complementar do EPLAN Electric P8**, adicionando uma **interface visual interativa** diretamente no ambiente do software.

**Formas de integração com o ERP:**

| Método | Descrição | Requisitos |
|--------|------------|------------|
| **Conexão direta (SQL)** | Acesso ao banco de dados do ERP por meio de credenciais seguras. | Permissões de leitura e escrita. |
| **Integração via API** | Comunicação através de endpoints REST, quando disponíveis. | API pública ou privada do ERP. |

A arquitetura foi projetada com foco em **extensibilidade**, permitindo adaptar o sincronizador a diferentes sistemas ERP **sem modificações estruturais** no núcleo da aplicação.

![Interface do EPLAN](https://github.com/GuiferrSouza/Portfolio/blob/main/src/confidential-projects/database-synchronizer/images/1.jpeg)

---

## Funcionalidades

### ⚙️ Configuração de Conexão
Permite configurar os parâmetros de acesso ao ERP, seja por **SQL** ou **API**.  
As credenciais podem ser salvas localmente, garantindo **agilidade na reconfiguração** em ambientes corporativos.

---

### 🧭 Mapeamento de Dados
Sistema avançado de **mapeamento de propriedades**, que define a correspondência entre campos do **EPLAN** e do **ERP**.

> Mais de **7.000 propriedades** do EPLAN podem ser selecionadas via **ComboBox** intuitivo.

**Tipos de dados suportados:**
- Booleanos  
- Inteiros  
- Números decimais  
- Textos simples e multilíngues  
- Datas  

Nos campos multilíngues, é possível especificar o idioma desejado ou utilizar o modo padrão, que retorna o valor sem idioma definido.

![Mapeamento de Propriedades](https://github.com/GuiferrSouza/Portfolio/blob/main/src/confidential-projects/database-synchronizer/images/2.jpeg)

---

### 🔁 Sincronização de Dados
A sincronização é **bidirecional**, permitindo atualização de dados em ambos os sentidos (EPLAN ↔ ERP).  

Antes da execução, o sistema apresenta uma **pré-visualização detalhada** das diferenças, classificando-as em:

| Categoria | Descrição | Ação |
|------------|------------|------|
| **Peças exclusivas** | Existentes apenas em um dos sistemas. | Inserção automática no outro. |
| **Peças conflitantes** | Mesmo número ERP, mas propriedades diferentes. | Atualização conforme regras definidas. |
| **Peças sincronizadas** | Dados idênticos entre os sistemas. | Nenhuma ação necessária. |

Todas as operações são executadas com **segurança e rastreabilidade**, registrando logs completos de cada processo.

![Interface de Sincronização](https://github.com/GuiferrSouza/Portfolio/blob/main/src/confidential-projects/database-synchronizer/images/3.jpeg)

---

## Requisitos Técnicos

### 📄 Licenciamento
- O EPLAN deve possuir o **módulo Runtime** habilitado (necessário para uso da API).  
- A licença deve incluir o número **EADN 0358**, para reconhecimento e autorização da aplicação.

### ⚙️ Versão do EPLAN
Compatível com **EPLAN Electric P8 versão 2022 ou superior**.

### 🔐 Permissões
O usuário deve possuir privilégios de **leitura e escrita** no ERP.  
Na ausência de API, é necessário acesso direto ao **banco de dados SQL**.

---

## Segurança e Auditoria

> **Todas as operações são registradas para garantir rastreabilidade total.**

Os logs locais armazenam:
- Data e hora da execução  
- Usuário responsável  
- Tipo de operação (inserção, atualização, conflito etc.)  
- Quantidade de registros processados  

Esses relatórios podem ser exportados para **auditorias, análises ou trilhas de conformidade**.

---

## Benefícios

✅ Sincronização automatizada entre engenharia e gestão  
✅ Eliminação de inconsistências e redundâncias  
✅ Redução de retrabalho e erros humanos  
✅ Integração flexível, segura e escalável  
✅ Interface nativa no EPLAN Electric P8  
✅ Maior confiabilidade na gestão de componentes  

---

## Confidencialidade

> **Código-fonte protegido por sigilo corporativo.**

Este projeto é **privado** e o código-fonte é **protegido por questões de confidencialidade e propriedade intelectual**.  
A reprodução, distribuição, engenharia reversa ou modificação não autorizada são **estritamente proibidas**.  

O conteúdo aqui apresentado tem caráter **técnico e demonstrativo**, sem exposição de código ou detalhes de implementação interna.
