/* Homework 3: Notifications
Goal: Multiple classes with the same interface.
Requirements:
Class Notification
Subclasses:
EmailNotification
SMSNotification
PushNotification
Each overrides send(message)
*/

class Notification {
    send(message) {
        console.log("You've got a notification: " + message);
    }
}

class EmailNotification extends Notification {
    send(message) {
        console.log("Email Notification: " + message);
    }
}

class SMSNotification extends Notification {
    send(message) {
        console.log("SMS Notification: " + message);
    }
}

class PushNotification extends Notification {
    send(message) {
        console.log("Push Notification: " + message);
    }
}

const email = new EmailNotification();
const sms = new SMSNotification();
const push = new PushNotification();

email.send("Your order has been shipped.");
sms.send("You are invited to the interview");
push.send("New message received.");
