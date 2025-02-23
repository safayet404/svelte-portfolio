<script lang="ts">
    import { onMount } from "svelte";
  
    let eventStartDate: string = "2025-02-22";
    let eventStartTime: string = "20:40";
    let eventEndDate: string = "2025-02-22";
    let eventEndTime: string = "22:40";
  
    let eventStartUTC: string;
    let eventEndUTC: string;
    let eventStartLocal: string;
    let eventEndLocal: string;
    let isActive: boolean = false;
  
    function convertToUTC(dateStr: string, timeStr: string): string {
      const eventDateTime = new Date(`${dateStr}T${timeStr}:00+06:00`);
      return eventDateTime.toISOString();
    }
  
    function convertToLocal(utcDate: string): string {
      return new Date(utcDate).toLocaleString();
    }
  
    function checkEventActive(): boolean {
      const now: Date = new Date();
      return now >= new Date(eventStartUTC) && now <= new Date(eventEndUTC);
    }
  
    onMount(() => {
      eventStartUTC = convertToUTC(eventStartDate, eventStartTime);
      eventEndUTC = convertToUTC(eventEndDate, eventEndTime);
  
      eventStartLocal = convertToLocal(eventStartUTC);
      eventEndLocal = convertToLocal(eventEndUTC);
  
      isActive = checkEventActive();
    });
  </script>
  
  <!-- UI Section -->
  <div class="event-card">
    <h2>Event Details</h2>
    <p><strong>Start Time (Local):</strong> {eventStartLocal}</p>
    <p><strong>End Time (Local):</strong> {eventEndLocal}</p>
    <p><strong>Status:</strong> {isActive ? "Ongoing" : "Not Started / Ended"}</p>

    <form>
      <fieldset class="border border-black p-4">
        <legend class="text-black">Helloss</legend>
        <br>
        First Name: <input type="text" placeholder="Enter your name" />
        <br>
        First Name: <input type="text" placeholder="Enter your name" />
      </fieldset>
    </form>
    
  </div>
  
  <!-- Styling -->
  <style>
    .event-card {
      background: #fff;
      padding: 1rem;
      border-radius: 8px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
      width: 1300px;
    }
    h2 {
      font-size: 1.2rem;
      color: #333;
    }
    p {
      font-size: 1rem;
    }
  </style>
  