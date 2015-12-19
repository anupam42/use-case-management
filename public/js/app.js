var app = angular.module('useCaseManagement', ['ngRoute', 'SuccessMessage', 'pascalprecht.translate', 'ngTable', 'ngResource', 'errorMessage']);

app.config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/application', {
            templateUrl: 'view/application.html',
            controller: 'ApplicationController'
        }).when('/use-case', {
            templateUrl: 'view/use-case.html',
            controller: 'UseCaseController'
        }).when('/actors', {
            templateUrl: 'view/actors.html',
            controller: 'ActorsController'
        }).when('/steps', {
            templateUrl: 'view/steps.html',
            controller: 'StepsController'
        }).when('/version', {
            templateUrl: 'view/version.html',
            controller: 'VersionController'
        }).otherwise({
            templateUrl: 'view/dashboard.html',
            controller: 'DashboardController'
        });
    }])
    .config(function($translateProvider) {
        $translateProvider.translations('en', {
            DASHBOARD: 'Dashboard',
            APPLICATION: 'Application',
            USE_CASE: 'Use Case',
            VERSION: 'Version',
            ACTORS: 'Actors',
            STEPS: 'Steps',
            ENGLISH: 'English',
            PORTUGUESE_PT_BR: 'Portuguese (PT-BR)',
            USE_CASE_MANAGEMENT: 'UseCaseManagement',
            LANGUAGE: 'Language',
            CURRENT_LANGUAGE: 'Current language',
            COMPLEMENTARY_INFORMATION: 'Complementary information',
            REQUIRED_FIELD: 'Field required',
            CREATE: 'Create',
            DESCRIPTION: 'Description',
            ELEMENTS: 'Elements',
            NAME: 'Name',
            NAME_IS_REQUIRED: 'Name is required',
            DESCRIPTION_IS_REQUIRED: 'Description is required',
            CREATE_ACTOR: 'Create actor',
            UPDATE_ACTOR: 'Update actor',
            CREATE_USE_CASE: 'Create use case',
            UPDATE_USE_CASE: 'Update use case',
            WELL_DONE: 'Well done!',
            YOU_SUCCESSFULLY_CREATED_A_ACTOR: 'You successfully created a actor',
            YOU_SUCCESSFULLY_CREATED_A_USE_CASE: 'You successfully created a use case',
            ACTOR_LIST: 'Actor list',
            ACTOR_NOT_FOUND: 'Actor not found',
            APPLICATION_IS_REQUIRED: 'Application is required',
            VERSION_IS_REQUIRED: 'Version is required',
            STATUS: 'Status',
            CREATE_APPLICATION: 'Create application',
            UPDATE_APPLICATION: 'Update application',
            LIST_APPLICATION: 'Application list',
            APPLICATION_NOT_FOUND: 'Application not found',
            YOU_SUCCESSFULLY_CREATED_AN_APPLICATION: 'You successfully created an application',
            YOU_SUCCESSFULLY_CREATED_A_VERSION: 'You successfully created a version',
            VERSION_NAME_IS_REQUIRED: 'Version name is required',
            CREATE_VERSION: 'Create version',
            UPDATE_VERSION: 'Update version',
            LIST_VERSION: 'List version',
            VERSION_NOT_FOUND: 'Version not found',
            ACTION: 'Action',
            DELETE: 'Delete',
            EDIT: 'Edit',
            CANCEL: 'Cancel',
            CONFIRM_DELETE: 'Do you really wnat to delete this register?',
            SELECT: 'Select one option',
            USE_CASE_NOT_FOUND: 'Use case not found',
            LIST_USE_CASE: 'Use case list',
            1: 'Finished',
            2: 'Deleted',
            3: 'Development',
            4: 'Pendent',
            USE_CASE_STATUS: 'Status',
            USE_CASE_STATUS_IS_REQUIRED: 'Use case status is required',
            ACTOR_IS_REQUIRED: 'Actor is required',
            SORRY_SOMETHING_WENT_WRONG: 'Sorry something went wrong',
            COULD_NOT_DELETE_ACTOR: 'could not delete the actor',
            YOU_SUCCESSFULLY_CREATED_AN_STEP: 'You successfully created an step',
            STEP: 'Step',
            COULD_NOT_DELETE_REVISION: 'could not delete the version',
            TYPE_1: 'Basic',
            TYPE_2: 'Alternate',
            TYPE_3: 'Exception',
            TYPE: 'Type',
            IDENTIFIER: 'Identifier',
            COMPLEMENTARY: 'Complementary',
            BUSINESS: 'Business rules',
            REFERENCE: 'Reference',
            IDENTIFIER_IS_REQUIRED: 'Identifier is required',
            CLOSE: 'Close',
            SAVE: 'Save',
            SAVE_STEP: 'Save step',
            NEW_LINE: 'New line',
            USE_CASE_IS_REQUIRED: 'Use case is required',
            TYPE_IS_REQUIRED: 'Type is required',
            PREVIEW: 'Preview',
            LIST_STEP: 'Step list',
        })
        .translations('ptBR', {
            DASHBOARD: 'Painel',
            APPLICATION: 'Sistema',
            USE_CASE: 'Caso de uso',
            VERSION: 'Versão',
            ACTORS: 'Atores',
            STEPS: 'Passos',
            ENGLISH: 'Inglês',
            PORTUGUESE_PT_BR: 'Português',
            USE_CASE_MANAGEMENT: 'Gerenciador de Caso de Uso',
            LANGUAGE: 'Idioma',
            CURRENT_LANGUAGE: 'Idioma atual',
            COMPLEMENTARY_INFORMATION: 'Informação complementar',
            REQUIRED_FIELD: 'Campo obrigatório',
            CREATE: 'Criar',
            DESCRIPTION: 'Descrição',
            ELEMENTS: 'Elementos',
            NAME: 'Nome',
            NAME_IS_REQUIRED: 'Nome é obrigatório',
            DESCRIPTION_IS_REQUIRED: 'Descrição é obrigatória',
            CREATE_ACTOR: 'Criar ator',
            UPDATE_ACTOR: 'Atualizar ator',
            CREATE_USE_CASE: 'Criar caso de uso',
            UPDATE_USE_CASE: 'Atualizar caso de uso',
            WELL_DONE: 'Muito bem!',
            YOU_SUCCESSFULLY_CREATED_A_ACTOR: 'Você criou um ator com sucesso',
            YOU_SUCCESSFULLY_CREATED_A_USE_CASE: 'Você criou um caso de uso com sucesso',
            ACTOR_LIST: 'Lista de atores',
            ACTOR_NOT_FOUND: 'Nenhum ator encontrado',
            APPLICATION_IS_REQUIRED: 'Nome do sistema é obrigatório',
            VERSION_IS_REQUIRED: 'Versão é obrigatória',
            STATUS: 'Status',
            CREATE_APPLICATION: 'Criar sistema',
            UPDATE_APPLICATION: 'Atualizar sistema',
            LIST_APPLICATION: 'Lista de sistemas',
            APPLICATION_NOT_FOUND: 'Nenhum sistema encontrado',
            YOU_SUCCESSFULLY_CREATED_AN_APPLICATION: 'Você criou um sistema com sucesso',
            YOU_SUCCESSFULLY_CREATED_A_VERSION: 'Você criou uma versão com sucesso',
            VERSION_NAME_IS_REQUIRED: 'Versão é obrigatória',
            CREATE_VERSION: 'Criar versão',
            UPDATE_VERSION: 'Atualizar versão',
            LIST_VERSION: 'Lista de versões',
            VERSION_NOT_FOUND: 'Nenhuma versão encontrada',
            ACTION: 'Ação',
            DELETE: 'Deletar',
            EDIT: 'Editar',
            CANCEL: 'Cancelar',
            CONFIRM_DELETE: 'Você realmente deseja deletar esse registro?',
            SELECT: 'Selecione uma opção',
            USE_CASE_NOT_FOUND: 'Caso de uso não encontrado',
            LIST_USE_CASE: 'Lista de casos de uso',
            1: 'Concluído',
            2: 'Excluído',
            3: 'Desenvolvimento',
            4: 'Suspenso',
            USE_CASE_STATUS: 'Status',
            USE_CASE_STATUS_IS_REQUIRED: 'Status do caso de uso é obrigatório',
            ACTOR_IS_REQUIRED: 'Ator é obrigatório',
            SORRY_SOMETHING_WENT_WRONG: 'Desculpe ocorreu um erro',
            COULD_NOT_DELETE_ACTOR: 'não foi possível deletar o ator desejado',
            YOU_SUCCESSFULLY_CREATED_AN_STEP: 'Você criou um passo com sucesso',
            STEP: 'Passo',
            COULD_NOT_DELETE_REVISION: 'não foi possível deletar a versão desejada',
            TYPE_1: 'Básico',
            TYPE_2: 'Alternativo',
            TYPE_3: 'Exceção',
            TYPE: 'Tipo',
            IDENTIFIER: 'Identificador',
            COMPLEMENTARY: 'Informação complementar',
            BUSINESS: 'Regra de negócio',
            REFERENCE: 'Referência',
            IDENTIFIER_IS_REQUIRED: 'Identificador é obrigatório',
            CLOSE: 'Fechar',
            SAVE: 'Salvar',
            SAVE_STEP: 'Salvar passo',
            NEW_LINE: 'Nova linha',
            USE_CASE_IS_REQUIRED: 'Caso de uso é obrigatório',
            TYPE_IS_REQUIRED: 'Tipo é obrigatório',
            PREVIEW: 'Visualizar',
            LIST_STEP: 'Lista de passos',
        });
        
        $translateProvider.preferredLanguage('ptBR');
    });