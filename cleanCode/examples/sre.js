// let's say we need a calendar like this:

class Calendar {
  addEvent(event) {...}
  removeEvent(event) {...}
}

// but with time it becomes this:
class Calendar {
  addEvent(event) {...}
  removeEvent(event) {...}
  getEventsBetween(stateDate, endDate) {...}
  setTimeOfEvent(event, startTime, endTime) {...}
  setTitleOfEvent(event, title) {...}
  exportFilteredEventsToXML(filter) {...}
  exportFilteredEventsToJSON(filter) {...}
}
// all functionality seems to be related to Calendar, but how many reasons it has to change now?
// We need to split it
class Calendar {
  addEvent(event) {...}
  removeEvent(event) {...}
  getEventsBetween(stateDate, endDate) {...}
}

class Event {
  setTime(startTime, endTime) {...}
  setTitle(title) {...}
}

class CalendarExporter {
  exportFilteredEventsToXML(filter) {...}
  exportFilteredEventsToJSON(filter) {...}
}
