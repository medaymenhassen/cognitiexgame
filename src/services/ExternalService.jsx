const ExternalService = {
    userData: { balance: 1000, bet: null },
    placeBet: (event, amount) => {
        if (amount > ExternalService.userData.balance) {
            alert("Insufficient funds!");
            return false;
        }
        ExternalService.userData.balance -= amount;
        ExternalService.userData.bet = { event, amount };
        return true;
    },
    resolveBet: (win) => {
        if (win) {
            ExternalService.userData.balance += ExternalService.userData.bet.amount * 2;
        }
        ExternalService.userData.bet = null;
    },
};
export default ExternalService;