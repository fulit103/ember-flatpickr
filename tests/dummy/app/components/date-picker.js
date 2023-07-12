import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class DatePicker extends Component {
  date = null;

  @action
  updateDate(selectedDates) {
    this.date = selectedDates[0];
    // Perform some action with the selected date here
    // For instance, you might want to send it to an action on a parent component
    this.args.onDateSelected?.(this.date);
  }
}
