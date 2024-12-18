import Assignment from "./Assignment.js";

export default {
    components: {
        Assignment,
    },

    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h2>

            <div class="flex gap-2">
                <button
                    class="border rounded px-1 py-px text-xs"
                    :class="{
                        'border-blue-500 text-blue-500': tag === currentTag
                    }"
                    v-for="tag in tags"
                    @click="currentTag = tag"
                >
                    {{ tag }}
                </button>
            </div>

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
        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        },

        filteredAssignments() {
            if (this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },
    },
};