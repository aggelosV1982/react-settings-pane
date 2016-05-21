/*
 * @react-settings-pane
 */
import React, { PropTypes, Component } from 'react'

export default class SettingsPage extends Component {

  /**
   * PropTypes
   *
   * @type {{settings: *, onPaneLeave: *}}
   */
  static propTypes = {
    settings: PropTypes.object.isRequired,
    onPaneLeave: PropTypes.func.isRequired
  };

  /**
   * Close was clicked
   */
  closeClicked() {
    this.props.onPaneLeave(false, this.props.settings, this.props.settings);
  }

  /**
   * Save was clicked
   */
  saveClicked() {
    this.props.onPaneLeave(false, this.props.settings, this.props.settings);
  }

  /**
   * Render this component
   *
   * @returns {XML}
   */
  render() {
    return (
      <div className="settings-footer">
        <div className="settings-close">
          <button className="btn btn-default" onClick={this.closeClicked.bind(this)}>Close</button>
        </div>
        <button className="btn btn-primary" onClick={this.saveClicked.bind(this)}>Save</button>
      </div>
    )
  }
}