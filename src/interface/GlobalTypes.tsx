export type GlobalTypes = { // tipagem da props que vem do app.tsx
    title?: string;
    name?: string;
    profissão?: string;
    firstTech?: string;
    secondTech?: string;
    thirdTech?: string;
    fourthTech?: string;
    fifthTech?: string;
}


export type MenuMobileType = { // tipagem do estado do setOpen, para ele receber um valor booleano
    setOpen: (bool: boolean) => void // setOpen vai receber um valor e esse valor é booleano. 
}