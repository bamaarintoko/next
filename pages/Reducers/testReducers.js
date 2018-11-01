const initialTest = {
    isTest: true,
    data: []
}

export function redTest(state = initialTest, action) {
    console.log("===>",state)
    switch (action.type) {

        default :
            return state;
    }
}