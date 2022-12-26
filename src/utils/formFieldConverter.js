export const domRefToObject = (domRef) => {
    const Data = {}
    ;[...domRef.current].forEach(input => {
        if (input.type !== 'submit') {
            Data[input.name] = input.value;
        }
    })
    return Data;
}

export const objectToFormData = (object) => {
    const formData = new FormData();
    for (const property in object) {
        formData.append(property, object[property]);
    }
    return formData;
}

export const domRefToFormData = (domRef) => {
    const objData = domRefToObject(domRef);
    const formData = objectToFormData(objData);
    return formData;
}