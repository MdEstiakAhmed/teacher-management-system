export const domRefToObject = (domRef) => {
    const Data = {}
        ;[...domRef.current].forEach(input => {
            if (input.type !== 'submit') {
                if (input.type === "checkbox") {
                    Data[input.name] = input.checked;
                }
                else {
                    let value = input.value;
                    if(value === 'true') { value = 1; }
                    else if (value === 'false') { value = 0; }
                    Data[input.name] = value;
                }
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
    try {
        const formData = new FormData();
        ;[...domRef.current].forEach(input => {
            if (input.type !== 'submit') {
                if (input.type === "checkbox") {
                    formData.append(input.name, input.checked);
                }
                else {
                    console.log(input.name, input.value);
                    let value = input.value;
                    if(value === 'true') { value = 1; }
                    else if (value === 'false') { value = 0; }
                    value && formData.append(input.name, value);
                }
            }
        })
        return formData;
    } catch (error) {
        return { status: false, message: error.message };
    }


    // const objData = domRefToObject(domRef);
    // const formData = objectToFormData(objData);
    // return formData;
}