import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: {
        Assignment,
        AssignmentTags,
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <assignment-tags
                :initial-tags="this.assignments.map(a => a.tag)"
                :current-tag="currentTag"
                @change="currentTag = $event"
            >
            </assignment-tags>

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-6">
                <assignment
                    v-for="assignment in filteredAssignments"
                    :key="assignment.id"
                    :assignment="assignment"
                >
                </assignment>
            </ul>
        </section>
    `,

    props: {
        title: String,
        assignments: Array,
    },

    data() {
        return {
            currentTag: 'all',
        };
    },

    computed: {
        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },
};