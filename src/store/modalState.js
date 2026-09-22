import { reactive } from 'vue'

// type: 'vessel' | 'origin' | 'destination' | null
const modal = reactive({
  isOpen: false,
  type: null,
  title: '',
})

function openModal(type, title) {
  modal.type = type
  modal.title = title
  modal.isOpen = true
}

function closeModal() {
  modal.isOpen = false
  modal.type = null
  modal.title = ''
}

export function useModalState() {
  return { modal, openModal, closeModal }
}
