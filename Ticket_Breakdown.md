# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

### ----------------------------------------------

### create a facility agent provision in the database:

Implementation Details:
- we need to create a table called FacitityAgents in the database with the facilityAgentID, agentID and facilityID
- the table should support a scenarion where an agent can belong to more than one facility
- the table should have only INT as its data types i.e facilityAgentID, agentID and facilityID are all INTs
- the agentID is to be used as it FOREIGN_KEY

Acceptance Criteria:
```
Scenario: 
Given an agentID from the database is provided,
When creating the agents record for the facility,
Then an column containing the facilityAgentID, agentID and facilityIDf is created.
```

Time | Effort:
- approximately 30min

### create an agent for specific facility:

Implementation Details:
- we need to create a function `createFacilityAgent` that takes in an agentID from the Agents table in the database
- the agent should exist in the Agents table hence a valid agentID is required for that function
- the function should be able to save the created agent in the FacitityAgents table
- the function should return a success message if the agent has been created or an error message if agent is not created

Acceptance Criteria:
```
Scenario: 
Given an agentID from the database is provided to the function,
When creating the agents record for the facility,
Then an agent account attached to that facility is created.
```

Time | Effort:
- approximately 1.5hr


### retrieve the shifts worked by an agent:

Implementation Details:
- we need to create a function `getShiftsByFacilityAgent` that takes in a facilityAgentID from the FacitityAgents table in the database
- the agent should exist in the FacitityAgents table hence a valid facilityAgentID is required for that function
- the function should be able to return all the shifts worked that quarter for a specific agent attached to that facility
- the function should return all shifts if the data exits or an error message if the data is not present

Acceptance Criteria:
```
Scenario: 
Given a facitityAgentID from the database is provided to the function,
When retrieving agents shifts data records for the facility,
Then all shifts for an agent attached to that particular facility should be returned.
```

Time | Effort:
- approximately 1hr
