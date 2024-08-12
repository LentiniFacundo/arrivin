import { string, object, mixed, ref } from "yup";

let formSchema = object({
    name: string().required("El nombre es obligatorio"),
    lastName: string().required("El apellido es obligatorio"),
    email: string().email("Debe ser un email valido").required("El email es obligatorio"),
    email2: string().email("Debe ser un email valido").oneOf([ref("email"), null], "Los correos deben ser iguales").required("El email es obligatorio"),
    phone: mixed().required("El telefono es obligatorio"),
    address: string().required("La direccion es obligatorio")
})

const validateForm = async (formData) => {
    try {
        await formSchema.validate(formData)
        return {success: true}
    } catch (error) {
        return {success: false, message: error.message}
    }
}

export default validateForm