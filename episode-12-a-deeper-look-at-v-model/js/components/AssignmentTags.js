export default {
    template: `
        <div class="flex gap-2">
            <button
                class="border rounded px-1 py-px text-xs"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                v-for="tag in tags"
                @click="$emit('update:currentTag', tag)"
            >
                {{ tag }}
            </button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String,
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        },
    }
};