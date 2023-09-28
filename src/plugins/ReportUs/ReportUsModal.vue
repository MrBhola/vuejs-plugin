<template>
    <div>
        <!-- Report Us Button -->
        <button @click="openModal" class="ru-report-button">Report Us</button>

        <!-- Modal -->
        <div v-if="isModalVisible" class="ru-modal">
            <div class="ru-modal-content">
                <h2 class="ru-modal-title">Report Issue</h2>
                <form @submit.prevent="submitReport">
                    <div class="ru-form-group">
                        <label for="title" class="ru-label">Title:</label>
                        <input type="text" id="title" v-model="report.title" required class="ru-title-input" />
                    </div>
                    <div class="ru-form-group">
                        <label for="description" class="ru-label">Description:</label>
                        <textarea id="description" v-model="report.description" required class="ru-description-input"></textarea>
                    </div>
                    <div class="ru-button-group">
                        <button type="button" @click="closeModal" class="ru-cancel-button">Cancel</button>
                        <button type="submit" class="ru-submit-button">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            isModalVisible: false,
            report: {
                title: "",
                description: "",
            },
        };
    },
    methods: {
        openModal() {
            this.isModalVisible = true;
        },
        closeModal() {
            this.isModalVisible = false;
        },
        submitReport() {
            // You can replace 'your-api-endpoint' with the actual URL where you want to submit the report.
            const apiUrl = '/report-us';

            // Use Axios to send the report data to the server.
            axios
                .post(apiUrl, this.report)
                .then(() => {
                    alert('Report submitted successfully');
                    this.closeModal();
                })
                .catch((error) => {
                    alert('Error submitting report: ' + error);
                     this.closeModal();
                });
        },
    },
};
</script>

<style scoped>
/* Add your CSS styles for the modal here */

.ru-title-input {
    background: rgb(217, 213, 213);
}
.ru-description-input {
    background: rgb(217, 213, 213);
}
.ru-modal {
    position: fixed;
    top: 0;
    right: 40%;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.ru-modal-content {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}

.ru-form-group {
    margin-bottom: 10px;
}

.ru-label {
    color: gray;
    /* Text color for labels */
    display: block;
    /* Ensure labels are on top of inputs */
    margin-bottom: 5px;
    /* Add some spacing between label and input */
}

.ru-input {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 3px;
    font-size: 16px;
}

.ru-input-textarea {
    height: 100px;
}

.ru-button-group {
    margin-top: 10px;
    text-align: right;
    /* Align buttons to the right */
}

.ru-button {
    padding: 5px 10px;
    margin-left: 5px;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    font-size: 16px;
}

.ru-report-button {
    position: fixed;
    bottom: 20px;
    /* Adjust the distance from the bottom as needed */
    left: 20px;
    /* Adjust the distance from the left as needed */
    background-color: #007BFF;
    color: white;
}

.ru-cancel-button {
    background-color: #007BFF;
    color: white;
    margin-right: 2px;
}

.ru-submit-button {
    background-color: #28A745;
    /* Change submit button color */
}
.ru-modal-title {
    color: gray; /* Gray text color for the modal title */
}
</style>
