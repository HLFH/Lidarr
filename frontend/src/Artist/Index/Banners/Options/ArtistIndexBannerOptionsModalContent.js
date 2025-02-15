import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Form from 'Components/Form/Form';
import FormGroup from 'Components/Form/FormGroup';
import FormInputGroup from 'Components/Form/FormInputGroup';
import FormLabel from 'Components/Form/FormLabel';
import Button from 'Components/Link/Button';
import ModalBody from 'Components/Modal/ModalBody';
import ModalContent from 'Components/Modal/ModalContent';
import ModalFooter from 'Components/Modal/ModalFooter';
import ModalHeader from 'Components/Modal/ModalHeader';
import { inputTypes } from 'Helpers/Props';
import translate from 'Utilities/String/translate';

const bannerSizeOptions = [
  { key: 'small', value: 'Small' },
  { key: 'medium', value: 'Medium' },
  { key: 'large', value: 'Large' }
];

class ArtistIndexBannerOptionsModalContent extends Component {

  //
  // Lifecycle

  constructor(props, context) {
    super(props, context);

    this.state = {
      detailedProgressBar: props.detailedProgressBar,
      size: props.size,
      showTitle: props.showTitle,
      showMonitored: props.showMonitored,
      showQualityProfile: props.showQualityProfile,
      showSearchAction: props.showSearchAction
    };
  }

  componentDidUpdate(prevProps) {
    const {
      detailedProgressBar,
      size,
      showTitle,
      showMonitored,
      showQualityProfile,
      showSearchAction
    } = this.props;

    const state = {};

    if (detailedProgressBar !== prevProps.detailedProgressBar) {
      state.detailedProgressBar = detailedProgressBar;
    }

    if (size !== prevProps.size) {
      state.size = size;
    }

    if (showTitle !== prevProps.showTitle) {
      state.showTitle = showTitle;
    }

    if (showMonitored !== prevProps.showMonitored) {
      state.showMonitored = showMonitored;
    }

    if (showQualityProfile !== prevProps.showQualityProfile) {
      state.showQualityProfile = showQualityProfile;
    }

    if (showSearchAction !== prevProps.showSearchAction) {
      state.showSearchAction = showSearchAction;
    }

    if (!_.isEmpty(state)) {
      this.setState(state);
    }
  }

  //
  // Listeners

  onChangeBannerOption = ({ name, value }) => {
    this.setState({
      [name]: value
    }, () => {
      this.props.onChangeBannerOption({ [name]: value });
    });
  };

  //
  // Render

  render() {
    const {
      onModalClose
    } = this.props;

    const {
      detailedProgressBar,
      size,
      showTitle,
      showMonitored,
      showQualityProfile,
      showSearchAction
    } = this.state;

    return (
      <ModalContent onModalClose={onModalClose}>
        <ModalHeader>
          Options
        </ModalHeader>

        <ModalBody>
          <Form>
            <FormGroup>
              <FormLabel>
                {translate('Size')}
              </FormLabel>

              <FormInputGroup
                type={inputTypes.SELECT}
                name="size"
                value={size}
                values={bannerSizeOptions}
                onChange={this.onChangeBannerOption}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                {translate('DetailedProgressBar')}
              </FormLabel>

              <FormInputGroup
                type={inputTypes.CHECK}
                name="detailedProgressBar"
                value={detailedProgressBar}
                helpText={translate('DetailedProgressBarHelpText')}
                onChange={this.onChangeBannerOption}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                {translate('ShowName')}
              </FormLabel>

              <FormInputGroup
                type={inputTypes.CHECK}
                name="showTitle"
                value={showTitle}
                helpText={translate('ShowTitleHelpText')}
                onChange={this.onChangeBannerOption}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                {translate('ShowMonitored')}
              </FormLabel>

              <FormInputGroup
                type={inputTypes.CHECK}
                name="showMonitored"
                value={showMonitored}
                helpText={translate('ShowMonitoredHelpText')}
                onChange={this.onChangeBannerOption}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                {translate('ShowQualityProfile')}
              </FormLabel>

              <FormInputGroup
                type={inputTypes.CHECK}
                name="showQualityProfile"
                value={showQualityProfile}
                helpText={translate('ShowQualityProfileHelpText')}
                onChange={this.onChangeBannerOption}
              />
            </FormGroup>

            <FormGroup>
              <FormLabel>
                {translate('ShowSearch')}
              </FormLabel>

              <FormInputGroup
                type={inputTypes.CHECK}
                name="showSearchAction"
                value={showSearchAction}
                helpText={translate('ShowSearchActionHelpText')}
                onChange={this.onChangeBannerOption}
              />
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
          <Button
            onPress={onModalClose}
          >
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  }
}

ArtistIndexBannerOptionsModalContent.propTypes = {
  size: PropTypes.string.isRequired,
  showTitle: PropTypes.bool.isRequired,
  showQualityProfile: PropTypes.bool.isRequired,
  detailedProgressBar: PropTypes.bool.isRequired,
  showSearchAction: PropTypes.bool.isRequired,
  onChangeBannerOption: PropTypes.func.isRequired,
  showMonitored: PropTypes.bool.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default ArtistIndexBannerOptionsModalContent;
