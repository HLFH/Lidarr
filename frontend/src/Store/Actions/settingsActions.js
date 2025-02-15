import { createAction } from 'redux-actions';
import { handleThunks } from 'Store/thunks';
import createHandleActions from './Creators/createHandleActions';
import delayProfiles from './Settings/delayProfiles';
import downloadClientOptions from './Settings/downloadClientOptions';
import downloadClients from './Settings/downloadClients';
import general from './Settings/general';
import importListExclusions from './Settings/importListExclusions';
import importLists from './Settings/importLists';
import indexerOptions from './Settings/indexerOptions';
import indexers from './Settings/indexers';
import languages from './Settings/languages';
import mediaManagement from './Settings/mediaManagement';
import metadata from './Settings/metadata';
import metadataProfiles from './Settings/metadataProfiles';
import metadataProvider from './Settings/metadataProvider';
import naming from './Settings/naming';
import namingExamples from './Settings/namingExamples';
import notifications from './Settings/notifications';
import qualityDefinitions from './Settings/qualityDefinitions';
import qualityProfiles from './Settings/qualityProfiles';
import releaseProfiles from './Settings/releaseProfiles';
import remotePathMappings from './Settings/remotePathMappings';
import rootFolders from './Settings/rootFolders';
import ui from './Settings/ui';

export * from './Settings/delayProfiles';
export * from './Settings/downloadClients';
export * from './Settings/downloadClientOptions';
export * from './Settings/general';
export * from './Settings/importLists';
export * from './Settings/importListExclusions';
export * from './Settings/indexerOptions';
export * from './Settings/indexers';
export * from './Settings/languages';
export * from './Settings/metadataProfiles';
export * from './Settings/mediaManagement';
export * from './Settings/metadata';
export * from './Settings/metadataProvider';
export * from './Settings/naming';
export * from './Settings/namingExamples';
export * from './Settings/notifications';
export * from './Settings/qualityDefinitions';
export * from './Settings/qualityProfiles';
export * from './Settings/releaseProfiles';
export * from './Settings/remotePathMappings';
export * from './Settings/rootFolders';
export * from './Settings/ui';

//
// Variables

export const section = 'settings';

//
// State

export const defaultState = {
  advancedSettings: false,

  delayProfiles: delayProfiles.defaultState,
  downloadClients: downloadClients.defaultState,
  downloadClientOptions: downloadClientOptions.defaultState,
  general: general.defaultState,
  indexerOptions: indexerOptions.defaultState,
  indexers: indexers.defaultState,
  importLists: importLists.defaultState,
  importListExclusions: importListExclusions.defaultState,
  languages: languages.defaultState,
  metadataProfiles: metadataProfiles.defaultState,
  mediaManagement: mediaManagement.defaultState,
  metadata: metadata.defaultState,
  metadataProvider: metadataProvider.defaultState,
  naming: naming.defaultState,
  namingExamples: namingExamples.defaultState,
  notifications: notifications.defaultState,
  qualityDefinitions: qualityDefinitions.defaultState,
  qualityProfiles: qualityProfiles.defaultState,
  releaseProfiles: releaseProfiles.defaultState,
  remotePathMappings: remotePathMappings.defaultState,
  rootFolders: rootFolders.defaultState,
  ui: ui.defaultState
};

export const persistState = [
  'settings.advancedSettings'
];

//
// Actions Types

export const TOGGLE_ADVANCED_SETTINGS = 'settings/toggleAdvancedSettings';

//
// Action Creators

export const toggleAdvancedSettings = createAction(TOGGLE_ADVANCED_SETTINGS);

//
// Action Handlers

export const actionHandlers = handleThunks({
  ...delayProfiles.actionHandlers,
  ...downloadClients.actionHandlers,
  ...downloadClientOptions.actionHandlers,
  ...general.actionHandlers,
  ...indexerOptions.actionHandlers,
  ...indexers.actionHandlers,
  ...importLists.actionHandlers,
  ...importListExclusions.actionHandlers,
  ...languages.actionHandlers,
  ...metadataProfiles.actionHandlers,
  ...mediaManagement.actionHandlers,
  ...metadata.actionHandlers,
  ...metadataProvider.actionHandlers,
  ...naming.actionHandlers,
  ...namingExamples.actionHandlers,
  ...notifications.actionHandlers,
  ...qualityDefinitions.actionHandlers,
  ...qualityProfiles.actionHandlers,
  ...releaseProfiles.actionHandlers,
  ...remotePathMappings.actionHandlers,
  ...rootFolders.actionHandlers,
  ...ui.actionHandlers
});

//
// Reducers

export const reducers = createHandleActions({

  [TOGGLE_ADVANCED_SETTINGS]: (state, { payload }) => {
    return Object.assign({}, state, { advancedSettings: !state.advancedSettings });
  },

  ...delayProfiles.reducers,
  ...downloadClients.reducers,
  ...downloadClientOptions.reducers,
  ...general.reducers,
  ...indexerOptions.reducers,
  ...indexers.reducers,
  ...importLists.reducers,
  ...importListExclusions.reducers,
  ...languages.reducers,
  ...metadataProfiles.reducers,
  ...mediaManagement.reducers,
  ...metadata.reducers,
  ...metadataProvider.reducers,
  ...naming.reducers,
  ...namingExamples.reducers,
  ...notifications.reducers,
  ...qualityDefinitions.reducers,
  ...qualityProfiles.reducers,
  ...releaseProfiles.reducers,
  ...remotePathMappings.reducers,
  ...rootFolders.reducers,
  ...ui.reducers

}, defaultState, section);
