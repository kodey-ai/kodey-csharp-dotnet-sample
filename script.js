document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('studentForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = {
            fullName: document.getElementById('fullName').value,
            rollNo: document.getElementById('rollNo').value,
            semester: document.getElementById('semester').value,
        };

        fetch('api/Students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Student information submitted successfully!');
            document.getElementById('studentForm').reset();
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred while submitting the form.');
        });
    });
});