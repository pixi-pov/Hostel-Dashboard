document.addEventListener('DOMContentLoaded', () => {
    const roomMap = document.querySelector('.room-map');
    const roomNumberInput = document.getElementById('roomNumber');
    const statusSelect = document.getElementById('status');
    const detailsTextarea = document.getElementById('details');
    const roomForm = document.getElementById('roomForm');
    const floorSelect = document.getElementById('floorSelect');

    const floorRooms = {
        1: ['001', '002', '003', '004', '005', '006', '007', '008', '009'],
        2: ['101', '102', '103', '104', '105', '106', '107', '108', '109'],
        3: ['201', '202', '203', '204', '205', '206', '207', '208', '209'],
        4: ['301', '302', '303', '304', '305', '306', '307', '308', '309'],
        5: ['401', '402', '403', '404', '405', '406', '407', '408', '409'],
        6: ['501', '502', '503', '504', '505', '506', '507', '508', '509']
    };

    const singleRooms = ['001', '002', '003', '101', '102', '103', '201', '202', '203', '301', '302', '303', '401', '402', '403', '501', '502', '503'];

    const getRoomType = (room) => {
        return singleRooms.includes(room) ? 'Single' : 'Triple';
    };

    const renderRooms = (floor) => {
        const rooms = floorRooms[floor];
        roomMap.innerHTML = ''; // Clear previous rooms
        rooms.forEach(room => {
            const roomElement = document.createElement('div');
            roomElement.className = `room available`;
            
            // Determine room type and add badge class
            const roomType = getRoomType(room);
            roomElement.classList.add(roomType === 'Single' ? 'badge-single' : 'badge-triple');
            roomElement.dataset.type = roomType; // Set the badge text
            
            roomElement.dataset.room = room;
            roomElement.textContent = room; // Display room number only in the box
            
            roomMap.appendChild(roomElement);
        });
    };

    floorSelect.addEventListener('change', (e) => {
        renderRooms(e.target.value);
    });

    roomMap.addEventListener('click', (e) => {
        if (e.target.classList.contains('room')) {
            const selectedRoom = document.querySelector('.room.selected');
            if (selectedRoom) selectedRoom.classList.remove('selected');
            e.target.classList.add('selected');

            const roomNumber = e.target.dataset.room;
            const roomType = getRoomType(roomNumber);
            roomNumberInput.value = `${roomNumber} (${roomType} Room)`;

            // Set the status select box to the room's current status
            statusSelect.value = e.target.classList.contains('available') ? 'available' : 'occupied';
            detailsTextarea.value = '';
        }
    });

    roomForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const roomNumberWithDetail = roomNumberInput.value;
        const roomNumber = roomNumberWithDetail.split(' ')[0]; // Extract room number from input value
        const status = statusSelect.value;
        const details = detailsTextarea.value;

        if (roomNumber && status) {
            const selectedRoom = document.querySelector(`.room[data-room="${roomNumber}"]`);
            if (selectedRoom) {
                selectedRoom.classList.remove('available', 'occupied');
                selectedRoom.classList.add(status);
            }
            showNotification(`Room ${roomNumber} updated to ${status} status with details: ${details}.`);
        } else {
            alert('Please select a room and status.');
        }
    });

    renderRooms(1);

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification-popup';
        notification.textContent = message;

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.add('show');
        }, 10);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 3000);
    }
});
