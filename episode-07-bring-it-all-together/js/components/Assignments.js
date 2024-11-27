import AssignmentList from "./AssignmentList.js";

export default {
    components: {
        AssignmentList,
    },

    template: `
        <assignment-list title="In Progress" :assignments="filters.inProgress"></assignment-list>
        <assignment-list title="Completed" :assignments="filters.completed" class="mt-4"></assignment-list>
    `,

    data() {
        return {
            assignments: [
                { name: 'Finish projects', complete: false, id: 1 },
                { name: 'Read chapter 4', complete: false, id: 2 },
                { name: 'Turn in homework', complete: false, id: 3 },
            ],
        };
    },

    computed: {
        filters() {
            return {
                inProgress: this.assignments.filter(assignment => !assignment.complete),
                completed: this.assignments.filter(assignment => assignment.complete),
            };
        },
    },
};