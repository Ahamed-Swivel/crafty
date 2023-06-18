interface ValidationInput {
  customerName?: string,
  email?: string,
  address?: string,
  contact?: string,
}

const validateOrder = ({
  customerName,
  address,
  contact,
}: ValidationInput): string[] => {
  const errors: string[] = []

  if (!customerName || !/^[A-Za-z]/.test(customerName)) {
    errors.push('customerName')
  }

  if (!contact || !/^\+?\d{10}$/.test(contact)) {
    errors.push('contact')
  }

  if (!address) {
    errors.push('address')
  }

  return errors
}

export default validateOrder
