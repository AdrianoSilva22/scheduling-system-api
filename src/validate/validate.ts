function checkNumberEmpty(e: number): boolean {
    return e === undefined || e === null || Number.isNaN(e)
}

function checkStringEmpty(e: string): boolean {
    return e === undefined || e === null || e.trim() === ''
}
function checkEmpty(e: any): boolean {
    return e === undefined || e === null || e === ''
}

function checkListEmpty(arr: Array<any>): boolean {
    return arr === undefined || arr === null || arr.length <= 0
}

function checkBooleanEmpty(e: boolean): boolean {
    return e === undefined || e === null
}

function checkDateEmpty(e: Date): boolean {
    return e === undefined || e === null
}

function checkRowEmptyFile(row: any): boolean {
    return row.length === 9 || row.undefined || row.null
}

function checkEmail(email: any): boolean {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

    return !emailRegex.test(email)
}
function checkRole(role: 'manager' | 'professional' | 'client'): boolean {

    return !['manager', 'professional', 'client'].includes(role)
}



export {
    checkBooleanEmpty,
    checkListEmpty,
    checkNumberEmpty,
    checkRowEmptyFile,
    checkStringEmpty,
    checkEmpty,
    checkEmail,
    checkRole,
    checkDateEmpty
}

