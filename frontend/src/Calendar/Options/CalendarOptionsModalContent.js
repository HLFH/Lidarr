import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FieldSet from 'Components/FieldSet';
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
import { firstDayOfWeekOptions, timeFormatOptions, weekColumnOptions } from 'Settings/UI/UISettings';
import translate from 'Utilities/String/translate';

class CalendarOptionsModalContent extends Component {

  //
  // Lifecycle

  constructor(props, context) {
    super(props, context);

    const {
      firstDayOfWeek,
      calendarWeekColumnHeader,
      timeFormat,
      enableColorImpairedMode
    } = props;

    this.state = {
      firstDayOfWeek,
      calendarWeekColumnHeader,
      timeFormat,
      enableColorImpairedMode
    };
  }

  componentDidUpdate(prevProps) {
    const {
      firstDayOfWeek,
      calendarWeekColumnHeader,
      timeFormat,
      enableColorImpairedMode
    } = this.props;

    if (
      prevProps.firstDayOfWeek !== firstDayOfWeek ||
      prevProps.calendarWeekColumnHeader !== calendarWeekColumnHeader ||
      prevProps.timeFormat !== timeFormat ||
      prevProps.enableColorImpairedMode !== enableColorImpairedMode
    ) {
      this.setState({
        firstDayOfWeek,
        calendarWeekColumnHeader,
        timeFormat,
        enableColorImpairedMode
      });
    }
  }

  //
  // Listeners

  onOptionInputChange = ({ name, value }) => {
    const {
      dispatchSetCalendarOption
    } = this.props;

    dispatchSetCalendarOption({ [name]: value });
  };

  onGlobalInputChange = ({ name, value }) => {
    const {
      dispatchSaveUISettings
    } = this.props;

    const setting = { [name]: value };

    this.setState(setting, () => {
      dispatchSaveUISettings(setting);
    });
  };

  onLinkFocus = (event) => {
    event.target.select();
  };

  //
  // Render

  render() {
    const {
      collapseMultipleAlbums,
      showCutoffUnmetIcon,
      onModalClose
    } = this.props;

    const {
      firstDayOfWeek,
      calendarWeekColumnHeader,
      timeFormat,
      enableColorImpairedMode
    } = this.state;

    return (
      <ModalContent onModalClose={onModalClose}>
        <ModalHeader>
          Calendar Options
        </ModalHeader>

        <ModalBody>
          <FieldSet legend={translate('Local')}>
            <Form>
              <FormGroup>
                <FormLabel>
                  {translate('CollapseMultipleAlbums')}
                </FormLabel>

                <FormInputGroup
                  type={inputTypes.CHECK}
                  name="collapseMultipleAlbums"
                  value={collapseMultipleAlbums}
                  helpText={translate('CollapseMultipleAlbumsHelpText')}
                  onChange={this.onOptionInputChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  {translate('IconForCutoffUnmet')}
                </FormLabel>

                <FormInputGroup
                  type={inputTypes.CHECK}
                  name="showCutoffUnmetIcon"
                  value={showCutoffUnmetIcon}
                  helpText={translate('ShowCutoffUnmetIconHelpText')}
                  onChange={this.onOptionInputChange}
                />
              </FormGroup>
            </Form>
          </FieldSet>

          <FieldSet legend={translate('Global')}>
            <Form>
              <FormGroup>
                <FormLabel>
                  {translate('FirstDayOfWeek')}
                </FormLabel>

                <FormInputGroup
                  type={inputTypes.SELECT}
                  name="firstDayOfWeek"
                  values={firstDayOfWeekOptions}
                  value={firstDayOfWeek}
                  onChange={this.onGlobalInputChange}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  {translate('WeekColumnHeader')}
                </FormLabel>

                <FormInputGroup
                  type={inputTypes.SELECT}
                  name="calendarWeekColumnHeader"
                  values={weekColumnOptions}
                  value={calendarWeekColumnHeader}
                  onChange={this.onGlobalInputChange}
                  helpText={translate('ShownAboveEachColumnWhenWeekIsTheActiveView')}
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>
                  {translate('TimeFormat')}
                </FormLabel>

                <FormInputGroup
                  type={inputTypes.SELECT}
                  name="timeFormat"
                  values={timeFormatOptions}
                  value={timeFormat}
                  onChange={this.onGlobalInputChange}
                />
              </FormGroup><FormGroup>
                <FormLabel>
                  {translate('EnableColorImpairedMode')}
                </FormLabel>

                <FormInputGroup
                  type={inputTypes.CHECK}
                  name="enableColorImpairedMode"
                  value={enableColorImpairedMode}
                  helpText={translate('EnableColorImpairedModeHelpText')}
                  onChange={this.onGlobalInputChange}
                />
              </FormGroup>

            </Form>
          </FieldSet>
        </ModalBody>

        <ModalFooter>
          <Button onPress={onModalClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    );
  }
}

CalendarOptionsModalContent.propTypes = {
  collapseMultipleAlbums: PropTypes.bool.isRequired,
  showCutoffUnmetIcon: PropTypes.bool.isRequired,
  firstDayOfWeek: PropTypes.number.isRequired,
  calendarWeekColumnHeader: PropTypes.string.isRequired,
  timeFormat: PropTypes.string.isRequired,
  enableColorImpairedMode: PropTypes.bool.isRequired,
  dispatchSetCalendarOption: PropTypes.func.isRequired,
  dispatchSaveUISettings: PropTypes.func.isRequired,
  onModalClose: PropTypes.func.isRequired
};

export default CalendarOptionsModalContent;
