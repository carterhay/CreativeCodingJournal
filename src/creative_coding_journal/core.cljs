(ns creative-coding-journal.core
  (:require [quil.core :as q :include-macros true]
            [creative-coding-journal.boids :as boids]))


(declare buttons)


(defn toggle-visibility [id]
  (let [button (js/document.getElementById id)
        style (. button -style)]
    (set! (. style -display) (cond
                                  (= (. style -display) "none") "inline-block"
                                  :else "none"))))


(defn toggle-visibility-all []
 (run! toggle-visibility (map :name buttons)))


(defn ^:export empty-sketch []
  (q/defsketch creative-coding-journal
    :host "creative-coding-journal"
    :size [0 0]))


(defn blank-sketch []
  (toggle-visibility-all)
  (empty-sketch))


(defn run [f]
  (toggle-visibility-all)
  (f))


(defn run-boids []
  (run boids/run-sketch))


(defn run-radius []
  nil)


(def buttons [{:name "back-button" :func blank-sketch}
              {:name "boids-button" :func run-boids}
              {:name "radius-button" :func run-radius}])


(defn run-sketch []
  (let [add-click-listener
        #(.addEventListener
           (js/document.getElementById (:name %))
           "click"
           (:func %))]
    (run! add-click-listener buttons)))


(run-sketch)
