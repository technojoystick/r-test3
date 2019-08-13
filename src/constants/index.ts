export const ReduxNamespaces = {
    LIST: 'list',
    ANSWERS: 'answers',
} as const;

export const RequestStatuses = {
    INACTIVE: 'inactive',
    REQUEST: 'request',
    SUCCESS: 'success',
    FAILURE: 'failure'
} as const;

export const QuestionTypes = {
    BOOLEAN: 'boolean',
    MULTIPLE: 'multiple',
} as const;
