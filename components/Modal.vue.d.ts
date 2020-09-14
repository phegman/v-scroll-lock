import Vue from 'vue';
export default class Modal extends Vue {
    private loremIpsum;
    private focusTrap;
    open: boolean;
    openModal(): void;
    closeModal(): void;
    enableFocusTrap(): void;
    handleEscapeKeyDown(event: KeyboardEvent): void;
    mounted(): void;
    beforeDestroy(): void;
}
