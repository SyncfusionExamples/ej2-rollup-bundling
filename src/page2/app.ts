import { Calendar, ChangedEventArgs } from '@syncfusion/ej2-calendars';
import { Button } from '@syncfusion/ej2-buttons';

//Initialize Button 1
let button1: Button = new Button({}, '#button1');

//Initialize Button 2
let button2: Button = new Button({}, '#button2');

let calendar: Calendar = new Calendar();
calendar.appendTo('#calendar');